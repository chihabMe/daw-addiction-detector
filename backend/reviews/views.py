from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Reviews
from .serializer import ReviewsSerlializer
from django.db.models import F
from rest_framework import status



@api_view(['POST','GET'])

def reviews_input(request):
    reviews = Reviews.objects.all()
    print(Reviews.rating)
    print(Reviews.user)

    if request.method == 'POST':
        serialiser= ReviewsSerlializer(data=request.data)
        if serialiser.is_valid():
            serialiser.save()
            return Response(serialiser.data, status=status.HTTP_201_CREATED)
        return Response(serialiser.errors, status=status.HTTP_400_BAD_REQUEST)
    serialiser= ReviewsSerlializer(reviews, many = True)
    return Response(serialiser.data)
    




#@api_view(['POST', 'GET'])
#def average_rating(request):
#    all_reviews = Reviews.objects.all()
#
#    if all_reviews:
#        total_reviews = all_reviews.count()
#        avg_rating = sum([F('rating') for review in all_reviews]) / total_reviews
#    else:
#        avg_rating = 0
#    
#    
#    serializer = ReviewsSerlializer(all_reviews, many=True)  # Pass all reviews to the serializer
#    data = {
#        'average_rating': avg_rating,
#        'reviews': serializer.data
#    }
#    return Response(data)
#