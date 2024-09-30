#!/bin/sh
until nc -z -v -w30 db 3306
do
  echo "Waiting for MySQL database connection..."
  # Wait 5 seconds before checking again
  sleep 5
done


#migrte the django app
python manage.py migrate
python manage.py collectstatic --no-input
if [ "$DJANGO_SUPERUSER_EMAIL" ]; then
  echo "created a superuser"
  echo $DJANGO_SUPERUSER_EMAIL
  python manage.py createsuperuser --noinput \
    --email "$DJANGO_SUPERUSER_EMAIL" \
    --first_name "$DJANGO_SUPERUSER_FIRSTNAME" \
    --last_name "$DJANGO_SUPERUSER_LASTNAME"
fi

# start the server
gunicorn core.wsgi --bind 0.0.0.0:8000  