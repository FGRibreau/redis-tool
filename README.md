`Redis-tool` is a collection of little node scripts

## Installation

    $ npm install redis-tool -g

## Documentation

* [redis-zlist-size](#zlist-size)
* [redis-rename](#rename)
* [redis-delall](#delall)

<a name="zlist-size" />
### Redis-zlist-size

```
Retrieve a list of zset keys via `pattern` and order them by size

Usage: node ./redis-zlist-size [options] pattern

Options:
  --json         print results in JSON format  [default: false]
  --graph        generate a Google Graph link  [boolean]  [default: false]
  -v, --verbose  verbose mode                  [boolean]  [default: false]
  -h, --help     this message.                 [boolean]
```

```shell
$ redis-zlist-size "bringr:*:*:tc:*"
bringr:1:121:ua:m     Members   15821544    Size    81660
bringr:1:121:ua:y     Members   15821544    Size    81660
bringr:1:123:ua:y     Members   13782356    Size    66280
bringr:1:123:ua:m     Members   13782356    Size    66280
bringr:1:121:ua:d     Members   13553541    Size    69459
bringr:1:123:ua:d     Members   12080298    Size    58102
bringr:6:93:ua:y      Members   10138538    Size    52129
bringr:6:93:ua:m      Members   10138538    Size    52129
bringr:1:123:ua:h     Members   9192799     Size    44231
bringr:6:93:ua:d      Members   6720535     Size    34702
bringr:1:123:ua:h     Members   3112684     Size    14940
bringr:1:121:ua:d     Members   2248963     Size    12071
[... truncated ... ]
```

Generated pie chart by members count
![Example of generated pie chart by members count](/fgribreau/redis-tool/raw/master/docs/redis-zlist-size-c1.png)

<a name="rename" />
### Redis-rename

```
Usage: redis-rename [options] oldPattern newPattern

Options:
  -v, --verbose           Verbose mode
  -h, --help              This message.
```

```shell
$ redis-rename -v ns:*:*:k ns:*:*:v
✔  ns:6:43:k → ns:6:43:v
✔  ns:1:121:k → ns:1:121:v
✔  ns:1:119:k → ns:1:119:v
✔  ns:1:121:k → ns:1:121:v
✔  ns:6:108:k → ns:6:108:v
✔  ns:1:121:k → ns:1:121:v
✔  ns:1:120:k → ns:1:120:v
✔  ns:6:90:k → ns:6:90:v
✔  ns:6:93:k → ns:6:93:v
```

<a name="delall" />
### Redis-dellall

```
Usage: redis-delall [options] pattern

Options:
  -p, --preview           Preview what is going to be deleted
  -v, --verbose           Verbose mode
  -h, --help              This message.
```

```shell
$ redis-delall -v ns:*:*:k
✔  ns:6:43:k deleted
✔  ns:1:121:k deleted
✔  ns:1:119:k deleted
✔  ns:1:121:k deleted
✔  ns:6:108:k deleted
✔  ns:1:121:k deleted
✔  ns:1:120:k deleted
✔  ns:6:90:k deleted
✔  ns:6:93:k deleted
```
