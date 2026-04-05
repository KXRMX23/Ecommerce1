<<<<<<< HEAD
from EcommerceInventory.Helpers import CommonListAPIMixin, CustomPageNumberPagination, createParsedCreatedAtUpdatedAt, renderResponse
=======
from EcommerceInventory.Helpers import CustomPageNumberPagination, renderResponse
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
from ProductServices.models import Categories
from rest_framework import generics
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.db.models import Q
from django.db import models

<<<<<<< HEAD
@createParsedCreatedAtUpdatedAt
class CategorySerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
    domain_user_id=serializers.SerializerMethodField()
    added_by_user_id=serializers.SerializerMethodField()
    parent_id=serializers.SerializerMethodField()

=======
class CategorySerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
    class Meta:
        model = Categories
        fields = '__all__'

    def get_children(self, obj):
        children = Categories.objects.filter(parent_id=obj.id)
        return CategorySerializer(children, many=True).data

<<<<<<< HEAD
    def get_domain_user_id(self,obj):
        return "#"+str(obj.domain_user_id.id)+" "+obj.domain_user_id.username
    
    def get_added_by_user_id(self,obj):
        return "#"+str(obj.added_by_user_id.id)+" "+obj.added_by_user_id.username
    
    def get_parent_id(self,obj):
        return "#"+str(obj.parent_id.id)+" "+obj.parent_id.name if obj.parent_id else None
=======
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
class CategoryListView(generics.ListAPIView):
    serializer_class = CategorySerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
<<<<<<< HEAD
=======
    pagination_class = CustomPageNumberPagination
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f


    def get_queryset(self):
        queryset=Categories.objects.filter(parent_id__isnull=True).filter(domain_user_id=self.request.user.domain_user_id.id)
<<<<<<< HEAD
        return queryset

    @CommonListAPIMixin.common_list_decorator(CategorySerializer)
    def list(self,request,*args,**kwargs):
        return super().list(request,*args,**kwargs)
=======
        search_query=self.request.query_params.get('search',None)

        if search_query:
            search_conditions=Q()

            for field in Categories._meta.get_fields():
                if isinstance(field,(models.CharField,models.TextField)):
                    search_conditions|=Q(**{f"{field.name}__icontains":search_query})
            queryset=queryset.filter(search_conditions)

        ordering=self.request.query_params.get('ordering',None)

        if ordering:
            queryset=queryset.order_by(ordering)

        return queryset
    
    def list(self,request,*args,**kwargs):
        queryset=self.filter_queryset(self.get_queryset())

        page=self.paginate_queryset(queryset)

        if page is not None:
            serializer=self.get_serializer(page,many=True)
            data=serializer.data
            total_pages=self.paginator.page.paginator.num_pages
            current_page=self.paginator.page.number
            page_size=self.paginator.page.paginator.per_page
            total_items=self.paginator.page.paginator.count
        else:
            serializer=self.get_serializer(queryset,many=True)
            data=serializer.data
            total_pages=1
            current_page=1
            page_size=len(data)
            total_items=len(data)

        return renderResponse(data={'data':data,'totalPages':total_pages,'currentPage':current_page,'pageSize':page_size,'totalItems':total_items},message='Categories Retrieved Successfully',status=200)
>>>>>>> cc9368e6b21427bc48b26647a666ef918d570d3f
