# sass-demo
WIP testing move to @use

## notes on moving to @use
If you want to use a variable from another stylesheet, you need to @use it in your current stylesheet and then reference it at the point you are adding the variable e.g. 

In config.scss, we have a variable called $color-black and we want to use it on our main.scss stylesheet.
At the top of the stylesheet add

@use 'config';

```
body {
  color: config.$color-black;
}
```

Or alternatively, you could use a letter or abreviation to represent that stylesheet

@use 'config' as c;

```
body {
  color: c.$color-black;
}
```

@forward will include the whole stylesheet, so we should use that for core variables

You can use @extend without the prefix of .config or .c if you include it at the top of the stylesheet with either @use and @extend