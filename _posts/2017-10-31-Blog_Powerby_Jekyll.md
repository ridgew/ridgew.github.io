---
layout: post
title: 使用基于Jekyll引擎的blog系统构建过程
date: 2017-10-31
tag: blog
---

　　看着曾经简陋的[blog](/Simple.html),连我自己都看不下去，于是花了点心思在github上检索了个模版框架，支持github pages发布的，于是发现潘柏信的个人博客[https://github.com/leopardpan/leopardpan.github.io](https://github.com/leopardpan/leopardpan.github.io/)。只要在github上弄过blog的都有过深刻的经历，这次部署blog的过程绝不亚于调试一个困难难找的bug过程。


### 部署博客文章及结构文件
                
　　修改原博客安装说明之后，一步一步地安装向导说明操作，主要步骤有：

>* 1、安装ruby-build插件
>* 2、安装Jekyll支持的Ruby新版本
>* 3、修改个人定制文件
>* 4、编写一篇日志式blog文章
>* 5、Git提交

### 1、安装ruby-build插件
发现我的windows 10 ubuntu子系统还没有ruby环境，怎样得安装Ruby了。
```
apt-get install ruby
```

$ gem install jekyll (默认版本1.9过低)
在ruby官方网站http://www.ruby-lang.org/en/downloads/

On Linux/UNIX, you can use the package management system of your distribution or third-party tools (rbenv and RVM).
https://github.com/rbenv/rbenv

apt-get install rbenv
rbenv install 命令不支持，需要安装rbenv-build
https://github.com/rbenv/ruby-build#readme


这里采用插件方式安装ruby-build
```
# As an rbenv plugin
$ mkdir -p "$(rbenv root)"/plugins
$ git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build

```

操作过程：
```
root@WIN-WQJ:~# git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
Cloning into '/root/.rbenv/plugins/ruby-build'...
remote: Counting objects: 7948, done.
remote: Total 7948 (delta 0), reused 0 (delta 0), pack-reused 7947
Receiving objects: 100% (7948/7948), 1.69 MiB | 501.00 KiB/s, done.
Resolving deltas: 100% (4884/4884), done.
Checking connectivity... done.
root@WIN-WQJ:~# cd "$(rbenv root)"/plugins/ruby-build && git pull
Already up-to-date.
```


### 2、安装Jekyll支持的Ruby新版本

    自从执行rbenv install 2.4.2版本之后，经过了漫长的编译过程，2.4.2版本的Ruby终于安装成功！

```
root@WIN-WQJ:/mnt/c/Users/ridge# rbenv install 2.4.2
Downloading ruby-2.4.2.tar.bz2...
-> https://cache.ruby-lang.org/pub/ruby/2.4/ruby-2.4.2.tar.bz2
Installing ruby-2.4.2...
Installed ruby-2.4.2 to /root/.rbenv/versions/2.4.2
```

   详情参见[Ruby在各平台的下载安装](http://www.ruby-lang.org/en/downloads/)


### 3、修改个人定制文件

    如果直接复制粘贴，也太不靠谱了，简直是制造垃圾。怎么也得改改，来个活学活练：

* 主要是修改根目录下的_config.yml文件，里面有注释说明了。


### 4、编写一篇日志式blog文章

    也就是本篇草稿式的日志文件了

### 5、Git提交

    使用你最喜爱的git工具提交吧，我使用的是windows下面的TortoiseGit,易用得很。（100%可能是因为使用过TortoiseSVN的缘故）

>* git pull
