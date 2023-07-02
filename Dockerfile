# Import Base Image
FROM python:3.8-alpine

# Set working directory
WORKDIR /app

# Set Environment Variables
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    LANG=C.UTF-8 \
    DEBIAN_FRONTEND=noninteractive

# Copy project code to the container
COPY . .

# Copy requirements.txt file
COPY requirements.txt .

# Install all project dependencies
RUN pip install -r requirements.txt

# Expose port 8000 for running Django develepment server
EXPOSE 8000

# Run Django development server when the container starts
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]