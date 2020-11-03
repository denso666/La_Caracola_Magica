#!/bin/bash - 

user=$1

tree /home/$user/Documents -fsa -D -o /home/$user/remember_me.txt
rm -r /home/$user/Documents/*
mv /home/$user/remember_me.txt /home/$user/Documents
