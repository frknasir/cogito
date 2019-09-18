<nav class="navbar navbar-expand-lg" style="background-color: #000000 !important;color: #ffffff">
        <div class="container">
            <div class="navbar-translate">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" 
                    data-target="#navbar-menu" aria-controls="navbarSupportedContent" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a style="color: white" href="/" class="navbar-brand">
                    <img height="50" src="/img/spoorlogo_14.png" alt="" srcset="">
                </a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-menu" >
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a style="color: white" href="/blog" class="nav-link">
                            <i class="fa fa-th"></i>
                            Blog
                        </a>
                    </li>
                    <li class="nav-item">
                        <a style="color: white" href="/#/incidents" class="nav-link"><i class="fa fa-map-marker"></i>
                            Incidents</a>                         
                    </li>
                    <div class="nav-item dropdown">
                        <a style="color: white" class="nav-link dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" 
                            href="#pk" role="button" aria-haspopup="true" 
                            aria-expanded="false">
                            <i class="fa fa-file-text"></i>
                            Resources
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <!--<li class="dropdown-header">Dropdown header</li>-->
                            <a href="/#/resources" class="dropdown-item">Downloads</a>
                        </ul>
                    </div>
                    <div class="nav-item dropdown">
                        <a style="color: white" class="nav-link dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" 
                            href="#pk" role="button" aria-haspopup="true" 
                            aria-expanded="false">
                            <i class="fa fa-exclamation-triangle"></i>
                            Get Involved
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <!--<li class="dropdown-header">Dropdown header</li>-->
                            <a href="/#/be-a-member" class="dropdown-item">Be a Member</a>
                        </ul>
                    </div>
                    <li class="nav-item">
                        <a style="color: white" href="/#/member" class="nav-link"><i class="fa fa-users"></i>
                            Team
                        </a>
                    </li>
                    <li class="nav-item">
                        <a style="color: white" href="/#/contact" class="nav-link">
                            <i class="fa fa-address-book"></i>
                            Contact
                        </a>
                    </li>
                    @if(Auth::check())
                    <div v-if="user.name" class="nav-item dropdown">
                        <a style="color: white" class="nav-link dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" 
                            href="#pk" role="button" aria-haspopup="true" 
                            aria-expanded="false">
                            <i class="fa fa-user-circle-o"></i>
                            {{ $data['user']->name }}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="{{ route('canvas.post.index') }}">
                                {{ __('canvas::blog.nav.user.posts') }}
                            </a>
                            <a class="dropdown-item" href="{{ route('canvas.tag.index') }}">
                                {{ __('canvas::blog.nav.user.tags') }}
                            </a>
                            <a class="dropdown-item" href="{{ route('canvas.topic.index') }}">
                                {{ __('canvas::blog.nav.user.topics') }}
                            </a>
                            <a class="dropdown-item" href="{{ route('canvas.index') }}">
                                {{ __('canvas::blog.nav.user.stats') }}
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="/#/admin" class="dropdown-item">
                                Admin
                            </a>
                            <a href="/#/incidentTypes" class="dropdown-item">
                                Incident Types
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                {{ __('canvas::blog.nav.user.logout') }}
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                style="display: none;">
                                @csrf
                            </form>
                        </ul>
                    </div>
                    @else
                    <li class="nav-item">
                        <a style="color: white" class="nav-link" href="/login">
                            <i class="fa fa-user-circle-o"></i>
                            Login
                        </a>
                    </li>
                    @endif
                </ul>
            </div>
        </div>
        <hr/>
    </nav>