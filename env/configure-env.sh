user=$1

mkdir /home/$user/.caracola
echo "@reboot /home/$user/.caracola/package-env.sh $user" > /home/$user/.caracola/envconfig
cp env/package-env.sh /home/$user/.caracola
crontab /home/$user/.caracola/envconfig
