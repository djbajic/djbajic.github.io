---
title: "Djordje Bajic - Team"
layout: gridlay
excerpt: "Djordje Bajic: Team"
sitemap: false
permalink: /team/
---

### <span style="color: #00A6D6">Join the team!</span>

We are always open to welcome new members to the team. 

**Bachelor and Master students at TU Delft:** we are happy to welcome students to conduct their Bachelor or Master thesis with us. Please contact Djordje to discuss if our group may be a good fit.

<!--**PhD students:** We do not have any vacancies at the moment. 
Interested students should send their applications to [PhD-IMB at tudelft.nl](mailto:PhD-IMB@tudelft.nl). Please explain why you are interested in pursuing a PhD, why our laboratory may be a good fit, and tell us a little bit about your background. -->

**PhD Students and Postdocs:** Although we do not have any vacancies at the moment, please reach out if you are interested in our work. There are different fellowships that might be available, and I am happy to support and guide the writing of the proposal. 
<br/><br/>
<br/><br/>

---

## Team - Current members



<!--Jump to [staff](#staff), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni), [administrative support](#administrative-support), [lab visitors](#lab-visitors).-->

<!--## Staff-->
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% if member.past == 0 %}

<!--{% assign even_odd = number_printed | modulo: 2 %}-->

<!--{% if even_odd == 0 %}-->
<div class="row">
<!--{% endif %}-->

<div class="col-sm-12 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }} {% if member.website %}<a target="_blank" href="{{ member.website }}">
<i class="fa fa-external-link"></i></a>{% endif %}
</h4>
  <i>{{ member.info }} <span class=""></span> 
<!--  <i>{{ member.info }} - <span class="flag-icon flag-icon-{{ member.country }}"></span> -->
<!--<br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden"> 
  
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}
  
  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}
  
  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}
  
  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}
  
  </ul>

  <p style="text-align: justify">
  {{ member.description }}
  </p>



<!-- CUSTOMIZE --->


<p>
{% if member.cv %} <a target="_blank" href="{{ site.url }}{{ site.baseurl }}/images/teamcv/{{ member.cv }}">
<i class="fa fa-file-pdf-o"></i>  Download cv</a> - {% endif %} {% if member.scholarusername %} <a target="_blank" href="http://scholar.google.com/citations?user={{ member.scholarusername }}" class="waves-effect waves-teal btn-flat my-google-scholar-link" data-tooltip="google scholar" ><i class="ai ai-google-scholar"></i></a> - {% endif %} {% if member.resgateusername %} <a target="_blank" href="http://www.researchgate.net/profile/{{ member.resgateusername }}" class="waves-effect waves-teal btn-flat my-researchgate-link" data-tooltip="researchgate" ><i class="ai ai-researchgate"></i> </a> - {% endif %} {% if member.mendeleyusername %}<a target="_blank" href="https://www.mendeley.com/profiles/{{ member.mendeleyusername }}" class="waves-effect waves-teal btn-flat my-mendeley-link" data-tooltip="mendeley" ><i class="ai ai-mendeley"></i></a> -  {% endif %} {% if  member.orcidusername %}<a target="_blank" href="http://orcid.org/{{ member.orcidusername }}" class="waves-effect waves-teal btn-flat my-orcid-link" data-tooltip="orcid"><i class="ai ai-orcid"></i></a> - {% endif %} {% if member.publonsusername %}<a target="_blank" href="https://publons.com/a/{{ member.publonsusername }}" class="waves-effect waves-teal btn-flat my-publons-link" data-tooltip="publons"><i class="ai ai-publons"></i></a> - {% endif %} {% if member.twitterusername %}<a target="_blank" href="https://twitter.com/{{ member.twitterusername }}" class="waves-effect waves-teal btn-flat my-twitter-link" data-tooltip="twitter"><i class="fa fa-twitter"></i></a> - {% endif %} {% if member.githubusername %}<a target="_blank" href="https://githun.com/{{ member.githubusername }}" class="waves-effect waves-teal btn-flat my-github-link" data-tooltip="github"><i class="fa fa-github"></i></a> - {% endif %} {% if member.spotifyusername  %}<a target="_blank" href="https://open.spotify.com/artist/{{ member.spotifyusername }}" class="waves-effect waves-teal btn-flat my-spotify-link"  data-tooltip="spotify"><i class="fab fa-spotify"></i></a> - {% endif %} {% if member.linkedinusername %}<a target="_blank" href="http://www.linkedin.com/in/{{ member.linkedinusername }}" class="waves-effect waves-teal btn-flat my-linkedin-link" data-tooltip="linkedin"><i class="fa fa-linkedin"></i></a> -  {% endif %} {% if member.stravausername  %}<a target="_blank" href="https://www.strava.com/athletes/{{ member.stravausername }}" class="waves-effect waves-teal btn-flat my-strava-link"  data-tooltip="strava"><i class="fab fa-strava"></i></a> {% endif %} 
</p>

</div>

<!--{% assign number_printed = number_printed | plus: 1 %}-->

<!--{% if even_odd == 1 %}-->
</div>
<!--{% endif %}-->


{% endif %}
{% endfor %}

<br/>



### Past Members

<table>
{% for member in site.data.team_members %}
{% if member.past == 1 %}
<tr>
  <td style="font-weight: bold; padding-right: 20px;">
    {{ member.name }}
    {% if member.website %}
      <a target="_blank" href="http://{{ member.website }}">
        <i class="fa fa-external-link"></i>
      </a>
    {% endif %}
  </td>
  <td>{{ member.info }}</td>
</tr>
{% endif %}
{% endfor %}
</table>
<br/>
<br/>
<br/>



