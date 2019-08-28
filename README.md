# CoC-Tools

Command line tools for the "Call of Cthulhu" tabletop role-playing-game (German 7th edition).

## Installation

```
npm i
npm link
```

## Usage

```
Usage: coc [options] [command]

Options:
  -V, --version                     output the version number
  -h, --help                        output usage information

Commands:
  name [options] <gender> [number]  generate a number of random names for a specific gender
  npc [options] [gender]            generate a random npc description
  phobia [options]                  pick a random phobia or show a complete list
  ocd [options]                     pick a random obsessive-compulsive disorder or show a complete list
  roll                              make a combined d10 + d100 roll
  insanity [options]                pick a random insanity
```

### `name`

```
Usage: coc name [options] <gender> [number]

generate a number of random names for a specific gender

Options:
  -m, --middle  add a random middle name (default: false)
  -h, --help    output usage information
```

### `npc`

```
Usage: coc npc [options] [gender]

generate a random npc description

Options:
  -s, --save  save last generated npc to desktop (default: false)
  -h, --help  output usage information
```

### `phobia`

```
Usage: coc phobia [options]

pick a random phobia or show a complete list

Options:
  -l, --list  show complete list of all phobias (default: false)
  -h, --help  output usage information
```

### `ocd`

```
Usage: coc ocd [options]

pick a random obsessive-compulsive disorder or show a complete list

Options:
  -l, --list  show complete list of all obsessive-compulsive disorders (default: false)
  -h, --help  output usage information
```

### `roll`

```
Usage: coc roll [options]

make a combined d10 + d100 roll

Options:
  -h, --help  output usage information
```

### `insanity`

```
Usage: coc insanity [options]

pick a random insanity

Options:
  -e, --extended  use list of extended insanities (default: false)
  -h, --help      output usage information
```
