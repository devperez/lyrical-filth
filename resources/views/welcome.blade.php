
   
   
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    {{-- <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script> --}}


    @extends('layouts.app')
    @include('nav')

    @section('content')

    <!-- Slider main container -->
<div class="swiper mySwiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img class="cover1" data-link="/vempire" />
        </div>
        <div class="swiper-slide">
            <img class="cover2" data-link="/dusk" />
        </div>
        <div class="swiper-slide">
            <img class="cover3" data-link="/cruelty" />
        </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
</div>

@endsection

