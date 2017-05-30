---
layout: page
title: Categories
permalink: /categories/
---

<ul>
{% for category in site.categories %}
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <li><a href="/categories/{{ category_name | slugify }}">{{ category_name}}</a></li>
{% endfor %}
</ul>
