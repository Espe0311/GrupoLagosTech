# GrupoLagosTech
Prueba técnica para grupo lagos. Se trabajó con Django (Python) para el backend y React para el frontend.

## Cómo ejecutar

Primero se necesitan 2 terminales para ejecutar frontend y backend de la aplicación. También se debe crear un entorno virtual donde ambas terminales deben activar.
Al clonar el repositorio, se debe ingresar a la carpeta `GrupoLagosTech` en donde una de las terminales debe ejecutar ``cd backend/liquiverde`` para acceder al proyecto de backend y ``cd frontend/LiquiVerdeFront` para acceder al proyecto de frontend.

### Backend

Antes de continuar, se debe tener instalado [pip](https://pypi.org/project/pip/). Dentro de los archivos se encuentra `requirements.txt`, el cual permite instalar las dependencias del proyecto. Se debe ejecutar los siguientes comandos para hacer dicha instalación y posterior ejecución del backend:

> pip install -r requirements.txt

> python manage.py makemigrations

> python manage.py migrate

> python manage.py runserver

El proyecto se ejecuta en `localhost:8000`

### Frontend

Dentro de la terminal dedicada al frontend, se debe ejecutar una serie de comandos para instalar las dependencias del proyecto de frontend.

> npm install

> npm run dev

Por defecto, el proyecto se ejecuta en `localhost:5173`