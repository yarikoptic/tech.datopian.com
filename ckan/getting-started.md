---
sidebar: auto
---

## Running CKAN locally for Development

### Cloning the repo

```
git clone https://github.com/okfn/docker-ckan
cd docker-ckan
```

### Booting CKAN

Create a local environment file:

```
cp .env.example .env
```

Build and Run the instances:

::: tip
`docker-compose` must be run with `sudo`. If you want to change this, you can follow the steps below. NOTE: The `docker` group grants privileges equivalent to the `root` user.  

Create the `docker` group: `sudo groupadd docker`  

Add your user to the `docker` group: `sudo usermod -aG docker $USER`  

At this point, you can log out and log back in for these changes to apply. You can also use the command `newgrp docker` to temporarily enable the new group for the current terminal session.
:::

```
docker-compose -f docker-compose.dev.yml up --build
```

When you see this log message:

![](https://i.imgur.com/WUIiNRt.png)

You can navigate to `http://localhost:5000`

![CKAN Home Page](https://i.imgur.com/T5LWo8A.png)

and log in with the credentials that docker-compose setup created for you [user: `ckan_admin` password:`test1234`]

::: tip
For the key concepts of what is CKAN and how it works you can read the [CKAN User Guide](https://docs.ckan.org/en/2.8/user-guide.html).
:::

## Next Steps

[Play around with CKAN portal](/ckan/play-around)

## Troubleshooting

Login / Logout button breaks the experience:

- Change the `http://ckan:5000` to `http://localhost:5000`. A complete fix is described in the [Play around with CKAN portal](/ckan/play-around). ( You next step ;) )