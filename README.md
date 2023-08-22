# this is a brief readme on the construction of my deployment of this practice web app to be able to be used live. 

### the domain name was registered and made funcitonal using a DNS called Namecheap.com. by changing the nameserver on namecheap to custom dns i can manage the DNS through digital ocean (nameserver1 = ns1.digitalocean.com, nameserver2 = ns2.digitalocean.com, ...)

### once the domain name has been verified and registered I use digital ocean to manage the domain name. on digital ocean selecting the current specific droplet (specfic server block that i am choosing to use to link the DNS to), i can enter a domain and dns using the drop down menu. once the domain is verified on digital ocean, the verification that the domain is now being managed by digital ocean i can see that the domain name has NS as part of its description.

### in my virtual machine i am using nginx to manage and setup the reverse proxy to specify the subdomain name and what proxy it should be running out of on the server block. 

### finally once all that is setup, i can auto fullfill my SSL certificate and allow for HTTPS connection using certbot and the command that specifically points to my nginx config file that contains the reverse proxy code that nginx uses to manage the subdomain. the command is as "certbot --nginx"