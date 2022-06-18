"""
Slugs.

Additional slug outputs.

MIT license.

Copyright (c) 2014 - 2017 Isaac Muse <isaacmuse@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
"""
import re
import unicodedata
import functools
from urllib.parse import quote
from . import util

RE_TAGS = re.compile(r'</?[^>]*>', re.UNICODE)
RE_INVALID_SLUG_CHAR = re.compile(r'[^\w\- ]', re.UNICODE)
RE_SEP = re.compile(r' ', re.UNICODE)
RE_ASCII_LETTERS = re.compile(r'[A-Z]', re.UNICODE)


def _uslugify(text, sep, case="none", percent_encode=False, normalize='NFC'):
    """Unicode slugify (`utf-8`)."""

    # Normalize, Strip html tags, strip leading and trailing whitespace, and lower
    slug = RE_TAGS.sub('', unicodedata.normalize(normalize, text)).strip()

    if case == 'lower':
        slug = slug.lower()
    elif case == 'lower-ascii':
        def lower(m):
            """Lowercase character."""
            return m.group(0).lower()

        slug = RE_ASCII_LETTERS.sub(lower, slug)
    elif case == 'fold':
        slug = slug.casefold()

    # Remove non word characters, non spaces, and non dashes, and convert spaces to dashes.
    slug = RE_SEP.sub(sep, RE_INVALID_SLUG_CHAR.sub('', slug))

    return quote(slug.encode('utf-8')) if percent_encode else slug


def slugify(**kwargs):
    """Configurable slugify."""

    case = kwargs.get('case', 'none')
    percent = kwargs.get('percent_encode', False)
    normalize = kwargs.get('normalize', 'NFC')
    return functools.partial(_uslugify, case=case, percent_encode=percent, normalize=normalize)


@util.deprecated(
    "'uslugify' is deprecated in favor of the configurable 'slugify' function. "
    "See documentation for more info."
)
def uslugify(text, sep):
    """Unicode slugify."""

    return slugify(case='lower')(text, sep)


@util.deprecated(
    "'uslugify_encoded' is deprecated in favor of the configurable 'slugify' function. "
    "See documentation for more info."
)
def uslugify_encoded(text, sep):
    """Unicode slugify (percent encoded)."""

    return slugify(case='lower', percent_encode=True)(text, sep)


@util.deprecated(
    "'uslugify_cased' is deprecated in favor of the configurable 'slugify' function. "
    "See documentation for more info."
)
def uslugify_cased(text, sep):
    """Unicode slugify cased (keep case) (`utf-8`)."""

    return slugify()(text, sep)


@util.deprecated(
    "'uslugify_cased_encode' is deprecated in favor of the configurable 'slugify' function. "
    "See documentation for more info."
)
def uslugify_cased_encoded(text, sep):
    """Unicode slugify cased (keep case) (percent encoded)."""

    return slugify(percent_encode=True)(text, sep)


@util.deprecated(
    "'gfm' is deprecated in favor of the configurable 'slugify' function. "
    "See documentation for more info."
)
def gfm(text, sep):
    """Unicode slugify cased (cased Unicode only) (`utf-8`)."""

    return slugify(case="lower-ascii")(text, sep)


@util.deprecated(
    "'gfm_encoded' is deprecated in favor of the configurable 'slugify' function. "
    "See documentation for more info."
)
def gfm_encoded(text, sep):
    """Unicode slugify cased (cased Unicode only) (percent encoded)."""

    return slugify(case='lower-ascii', percent_encode=True)(text, sep)
