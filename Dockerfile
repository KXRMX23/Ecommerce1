
#Stage 1:Build Frontend
FROM node:18 as build-stage

WORKDIR /code

COPY ./Frontend/ecommerce_inventory/ /code/Frontend/ecommerce_inventory/

WORKDIR /code/Frontend/ecommerce_inventory

#Installing packages
RUN npm install

#Building the frontend
RUN npm run build


#Stage 2:Build Backend
FROM python:3.11.0

#Set Environment Variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /code

#Copy Django Project to the container
COPY ./Backend/EcommerceInventory /code/Backend/EcommerceInventory/

#Install the required packages
RUN pip install -r ./Backend/EcommerceInventory/requirements.txt

#Copy the frontend build to the Django project
COPY --from=build-stage ./code/Frontend/ecommerce_inventory/build /code/Backend/EcommerceInventory/static/
COPY --from=build-stage ./code/Frontend/ecommerce_inventory/build/static /code/Backend/EcommerceInventory/static/
COPY --from=build-stage ./code/Frontend/ecommerce_inventory/build/index.html /code/Backend/EcommerceInventory/EcommerceInventory/templates/index.html

#Run Django Migration Command
RUN python ./Backend/EcommerceInventory/manage.py migrate

#Run Django Collectstatic Command
RUN python ./Backend/EcommerceInventory/manage.py collectstatic --no-input

#Expose the port
EXPOSE 80

WORKDIR /code/Backend/EcommerceInventory

#Run the Django Server
CMD ["gunicorn","EcommerceInventory.wsgi:application","--bind","0.0.0.0:8000"]

# Stage 1: Build frontend
FROM node:18 as build-stage

WORKDIR /app

# # Set working directory for frontend
# WORKDIR /app/frontend


# # Copy frontend package files
COPY ./Frontend/ecommerce_inventory/ /code/Frontend/ecommerce_inventory/

WORKDIR /code/Frontend/ecommerce_inventory/
# # Install frontend dependencies
RUN npm install

# # Copy frontend source code
# COPY ./Frontend/ecommerce_inventory ./

# # Build frontend (adjust this based on your React build process)
RUN npm run build

# Stage 2: Build Django backend
FROM python:3.11.0

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /code

# Set working directory for backend

# Copy backend requirements file
# COPY ./Backend/EcommerceInventory/requirements.txt /code/

# Copy built frontend to Django static files directory

# Copy Django project files
COPY ./Backend/EcommerceInventory /code/Backend/EcommerceInventory/

RUN pip install -r ./Backend/EcommerceInventory/requirements.txt
COPY --from=build-stage ./code/Frontend/ecommerce_inventory/build ./Backend/EcommerceInventory/static/
COPY --from=build-stage ./code/Frontend/ecommerce_inventory/build/static ./Backend/EcommerceInventory/static/
COPY --from=build-stage ./code/Frontend/ecommerce_inventory/build/index.html ./Backend/EcommerceInventory/EcommerceInventory/templates/index.html

# Collect static files
RUN python ./Backend/EcommerceInventory/manage.py migrate
RUN python ./Backend/EcommerceInventory/manage.py collectstatic --no-input

# Expose port 80 (adjust as necessary)
EXPOSE 80
WORKDIR /code/Backend/EcommerceInventory
# Command to run Django server
CMD ["gunicorn", "EcommerceInventory.wsgi:application", "--bind", "0.0.0.0:8000"]

