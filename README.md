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

```markdown
Take a look at this video:

{% bilibili %}2440534{% endbilibili %}
```

This will embed the video from http://www.bilibili.com/video/av2440534/

Notice that: the video id is is all **numbers**,
the video id is `2440534`, not `av2440534`, no `av` in video id. Have fun.
