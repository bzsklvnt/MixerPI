## Documentation ##

 - [Configuration](#Configuration)
	 - [First set up](#First-set-up)
	 - [Run](#Run)
<!---
- [Backend](#backend) 
	- [API](#api) 
	- [Models](#models) 
	- [Serializers](#serializers) 

- [Frontend](#frontend) 
	- [Pages](#pages) 
	- [Components](#components)) 
-->

## Configuration ## 
### First set up ###

- Install Python 3.9.5 [from](https://www.python.org/downloads/release/python-395/?fbclid=IwAR0u88-At8y40J75DIxG68ZbbiKLBv_6fBR-gDkHrzxPf04InL6_b7wmJ3E)
- WARNING! You need the choose the option to (Add to PATH) during installation process!
- Install Node.js [from](https://nodejs.org/en/)

#### Python virual environment ####
In the project folder (MixerPI/).

On Linux

- Install virtualenv ``sudo apt install python3-venv``
- Create the virual environment ``python3 -m venv env``
- Give running permission to activate script ``chmod +x ./env/bin/activate``
- Activate the virual environment ``source ./env/bin/activate``
- Install the packages needed in the virual environment ``pip install -r requirements.txt``
- Create the database ``python manage.py migrate``

On Windows

- Install virtualenv ``python3 -m pip install --user virtualenv``
- Create the virual environment ``py -m venv env``
- Activate the virual environment ``.\env\Scripts\activate``
- Install the packages needed in the virual environment ``pip install -r requirements.txt``
- Create the database ``python manage.py migrate``

#### Frontend (React) ####  
- In the (MixerPI/frontend) folder run : ``npm install``
	
### Run ###

#### Backend (Python) ####

On Windows

In the project folder (MixerPI/) :
- ``.\env\Scripts\activate``
- ``python manage.py runserver``

On Linux

In the project folder (MixerPI/) :
- ``source ./env/bin/activate``
- ``python3 manage.py runserver``

#### Frontend (React) ####
- Az SPCI-SMAP-SHM-Voter\frontend mappában futtatni ``npm start``	
