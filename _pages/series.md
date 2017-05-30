---
layout: page
title: Series
permalink: /series/
---

<ul>
{% for tag in site.tags %}
    {% capture tag_name %}{{ tag | first }}{% endcapture %}
    <li><a href="/series/{{ tag_name | slugify }}">{{ tag_name }}</a></li>
{% endfor %}
</ul>
