Embed bilibili videos in gitbook
==============

This plugins requires gitbook `>=2.0.0`.

### How to use it?

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": ["bilibili"]
}
```

You can now add bilibili videos to your book using this tag:

```

{% bilibili %}2440534{% endbilibili %}

or

{% bilibili %}av2440534{% endbilibili %}

```

This will embed the video from http://www.bilibili.com/video/av2440534/.

### Customizable video size?

Yes, from version 0.4.0, you can specify video size with format *`${video} @ ${width} x ${height}`*, for example

```

{% bilibili %} av2440534@640x480 {% endbilibili %}

```

will have video size 640 x 480.

Have fun with gitbook and bilibili.
