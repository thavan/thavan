---
categories:
- Python
comments: true
date: "2018-12-08T05:00:00Z"
draft: true
tags:
- python
- django
title: Up and Running Python
toc:
- true
updated: "2018-11-06 05:00:00"
url: /:categories/:title/
---

# Introduction
In this post we will learn about installing Python on Windows, Mac and Linux. Sometimes, we work on multiple projects that use different version of Python. We will also see how maintain different version of Python.

# Installing Python
When we work on multiple projects, each project may be running in different version of Python. Let's see about how to install and maintain different versions of Python in your machine.

## Windows
There seems to be no reliable way to install and manage multiple versions of Python in Windows using Python's standard distribution. But if you use an IDE like PyCharm, you always can install different versions of Pythons in different folders, and let the IDE pickup your required Python version. If you plan to use IDE, go ahead with the below section which explains how to install standard python distribution for windows. If not, if you have plan to use different versions in console or windows command prompt, we will use Anaconda which is explained in the next section.

### Installing Standard Python distribution
If Anaconda is not for you, you can always go ahead with standard Python distribution. First download python from [https://www.python.org/downloads/](https://www.python.org/downloads/). You will see multiple versions of Python listed over there. 3.7.1 is the latest stable version at the time of writing this post. Select 3.7.1 link as shown in the below figure.

![Python 3.7.1](/assets/python-download.png)

After selecting a particular version of Python you will see all the platform specific setup files over there like the one below.

![Python Download](/assets/python-files.png)

Select the version based on your OS type. If it windows 64 bit, just select `Windows x86-64 executable installer`. for windows 32 bit, select `Windows x86 executable installer`. After downloading double click the installer. Make sure that you select 'Add Python 3.7 to PATH' as shown in the below figure. This way you can access python from command prompt.

![Python Install](/assets/python-install.png)

Also click 'Customize Installation' to change the Python installation path. To make Python installation easily accessible choose C:\\Python37 as a installation directory as shown below.

![Python Installation Path](/assets/python-path.png)


### Installing Anaconda
Anaconda seems to be a reliable way to install and maintain multiple versions of Python in windows. Download the latest version of Anaconda package from [https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe](https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe). I have given link to Miniconda, which does not include any third party packages. This is sufficient as we can always install third party packages when we actually need them.

After download the .exe file, double click to install. Please select add 'Add Anaconda to my PATH environment variable.'. This way you will be able to access python command from command prompt. After installing open the command prompt and type `python`. If it works fine, you have successfully installed Python. Now if I want to install another version of Python, for example, Python 2.7

```bash
conda create -n py27 python=2.7
activate py27
python --version
```

py27 is the name of the new python environment. You can choose any name. `python=2.7` installs the 2.7 version of the Python to this environment.
`activate py27` activates the environment we just created.


## Linux
Python installation method can be slightly different for different Linux distribution. But it's more or less same if we download and install from source.
Use the below commands to install Python in Linux.

```bash
wget https://www.python.org/ftp/python/3.7.1/Python-3.7.1.tgz
tar -zxvf Python-3.7.1.tgz
cd Python-3.7.1
./configure
make
sudo make install
```

## Mac
Better way to install Python on Mac is to use homebrew

```bash
brew install python
```


