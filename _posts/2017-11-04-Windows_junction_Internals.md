---
layout: post
title: 利用junction命令节省windows目录空间
date: 2017-11-04
tag: windows cmd mklink
---
    这个Junction实现的文件符号链接功能Linux系统老早就实现了，而Windows直到win7版本才直接内置mklink命令实现。那是否只有win7版本以上才能使用呢，其实不然，自windows xp系统开始，系统文件NTFS格式就已经支持这种结构了，只是对于windows xp的版本需要另一个额外功能辅助执行。

###  Junctionfib工具。Create Win2K NTFS symbolic links.
位于 [sysinternals](https://docs.microsoft.com/zh-cn/sysinternals/downloads/file-and-disk-utilities)站点的文件与磁盘工具部分，可见windows 2000系统就可以使用了。下载地址页面：https://docs.microsoft.com/zh-cn/sysinternals/downloads/junction

###  Mklink命令行内置，这个就是win7系统之后内置的命令工具了。
以下为转移C盘目录实例：
![MKLINK实例](https://github.com/ridgew/ridgew.github.io/blob/master/images/MKLINK_Smaple.JPG?raw=true)

   具体更详细一点的参数含义简图标注如下：
![MKLINK参数](https://github.com/ridgew/ridgew.github.io/blob/master/images/MKLINK_Params.JPG?raw=true)

   以上操作仅以备忘节省C盘空间操作之用。
