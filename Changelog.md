# Goldfish Changelog

## 0.2.3 (unreleased)

- Improve table formatting

## 0.2.2 (2015-06-04)

Features:

- File upload via drag and drop into the folder view or drag and drop into the editor. The latter will insert a reference to the file into the text.
- Commits that are less than a minute ago are automatically amended.
- Autosave in the web editor

Fixed:

- Minor fixes and improvements

## 0.2.1 (2015-05-21)

Features:

- New page for search and recently modified pages, all in one!
- Create new files via the web interface
- Delete files via the web interface
- Display PDF files
- Open files with the system default app
- Simple usage instructions when opening an empty repo

Bugfixes:

- Goldfish now automatically creates the data directory if it doesn't exist already

## 0.2.0 (2015-05-15)

- Added a very basic markdown editor, to be expanded over the next versions
- Replaced mathjax with embedded katex, which means latex now works without internet connection
- Changed inline equations to use single `$` wrapper
- Added support for svg files
- Made some improvements for small displays
- Removed auto-refresh for now to focus on the built-in editor
- Rebuilt client-side using ember

## 0.1.2 (2014-11-24)

- Added `-p` option to specify port
- Fixed latex rendering incorrectly sometimes (#22)
- Fixed a bug with relative paths on OS X (#21)

## 0.1.1 (2014-10-25)

- Fixed error pages not appearing

## 0.1.0 (2014-10-24)

- Initial release
