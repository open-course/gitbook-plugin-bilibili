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

### More parameters

Full parameters' format *`${video} @ ${width} x ${height} @ ${section} @ ${mode}`*

#### Patameters description

**video**

video is bilibili video's number.

**width x height**

Specify the size of the player.

Supported from version 0.4.1

**section**

Indicates which sub video in the specified av number should be played.

section counts from 1.

Supported from version 0.4.2

**mode**

Specifies the player's mode, supports both `flash` and `html5` modes.

Supported from version 0.4.2

#### Example

Here are some examples.

```
{% bilibili %} 2440534 {% endbilibili %}

{% bilibili %} av2440534 {% endbilibili %}

{% bilibili %} av2440534@640x480 {% endbilibili %}

{% bilibili %} av2440534@640x480@1@html5 {% endbilibili %}

{% bilibili %} av4950805@544x415@2@flash {% endbilibili %}

```

> If you chose using full parameters mode, you should type all of parameters and don't omit any parameters.
> Until now, flash player counldn't work correctly. I suggest that you should use html5 player.
