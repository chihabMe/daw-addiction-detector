until nc -z -v -w30 db 3306
do 
    echo "watting for MySQL database connection"
    sleep 5
done

# migarte the database 
python manage.py migrate
# collect static files
python manage.py collectstatic --no-input

##start the server 
gunicorn core.wsgi --bind 0.0.0.0:8000
