`Redis-tool` is a collection of little node scripts

## Installation

    $ npm install redis-tool -g

## Redis-rename

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

## Redis-dellall

```
Usage: redis-delall [options] pattern

Options:
  -p, --preview           Preview what is going to be deleted
  -v, --verbose           Verbose mode
  -h, --help              This message.
```

```shell
$ redis-delall -v ns:*:*:k
✔  ns:6:43:k
✔  ns:1:121:k
✔  ns:1:119:k
✔  ns:1:121:k
✔  ns:6:108:k
✔  ns:1:121:k
✔  ns:1:120:k
✔  ns:6:90:k
✔  ns:6:93:k
```
