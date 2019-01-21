# Installing Django
To install the latest version of Django, run the following command

```bash
pip install django
```

We can also give specific version of Django to pip command

```bash
pip install django==1.9
```

After installing Django create a new Django project.

```bash
django-admin startproject mysite
cd mysite
python manage.py runserver # starts development server.
```

Now open your browser and type the address http://localhost:8000 and you will Django's welcome page.