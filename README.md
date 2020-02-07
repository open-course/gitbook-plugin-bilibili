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

{% bilibili %} 2440534 {% endbilibili %}

or

{% bilibili %} av2440534 {% endbilibili %}

```

This will embed the video from http://www.bilibili.com/video/av2440534/.

### More parameters

Full parameters' format

```
${av} [# ${page}] [@ ${width} x ${height}]
```

#### Patameters description

**av**

AV is bilibili video's number.

**page**

Indicates which sub video in the specified av number should be played.

Default is 1. And `page` counts from 1.

Supported from version 0.6.0

**width x height**

Specify the size of the player.

Default is 100% x 100%

Supported from version 0.4.x

#### Example

Here are some examples.

```
{% bilibili %} 2440534 {% endbilibili %}

{% bilibili %} av2440534 {% endbilibili %}

{% bilibili %} av2440534@640x480 {% endbilibili %}

{% bilibili %} av2440534#2@640x480 {% endbilibili %}
```
