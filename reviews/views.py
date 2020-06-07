from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Review
from .serializers import ReviewSerializer, PopulatedReviewSerializer

class ReviewListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        reviews = Review.objects.all()
        serialized_reviews = PopulatedReviewSerializer(reviews, many=True)
        return Response(serialized_reviews.data, status=status.HTTP_200_OK)


    def post(self, request):
        request.data['owner'] = request.user.id
        created_review = ReviewSerializer(data=request.data)
        if created_review.is_valid():
            created_review.save()
            return Response(created_review.data, status=status.HTTP_201_CREATED)
        return Response(created_review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class ReviewDetailView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_review(self, pk):
        try:
            return Review.objects.get(pk=pk)
        except Review.DoesNotExist:
            raise NotFound()

    def is_review_owner(self, review, user):
        if review.owner.id != user.id:
            raise PermissionDenied()

    def get(self, _request, pk):
        review = self.get_review(pk)
        serialized_review = PopulatedReviewSerializer(review)
        return Response(serialized_review.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        review_to_delete = self.get_review(pk)
        self.is_review_owner(review_to_delete, request.user)
        review_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)