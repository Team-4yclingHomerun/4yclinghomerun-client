import { useEffect, useRef, useState } from 'react';

import markerIcon from '@/assets/logo/KTwiz_logo.svg';
import DirectionMapSkeleton from './DirectionMapSkeleton';
import { cn } from '@/utils/cn';

const DirectionMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const lat = 37.2997553;
  const lng = 127.0096685;
  const zoom = 15;
  const markerLat = 37.2997553;
  const markerLng = 127.0096685;
  const apiKey = import.meta.env.VITE_NAVER_MAP_API_KEY_ID;

  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current) return;

      const mapOptions = {
        center: new window.naver.maps.LatLng(lat, lng),
        zoom: zoom,
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
        zoomControl: true,
        minZoom: 10,
        maxZoom: 20,
      };

      const map = new window.naver.maps.Map(mapRef.current, mapOptions);

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(markerLat, markerLng),
        map: map,
        icon: {
          url: markerIcon,
          scaledSize: new naver.maps.Size(80, 80),
        },
      });

      setIsLoading(false);
    };

    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${apiKey}`;
    script.async = true;
    script.onload = initializeMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [lat, lng, zoom, markerLat, markerLng]);

  return (
    <div className="relative h-[70vh] w-full border-4 border-kt-red-3">
      {isLoading && <DirectionMapSkeleton />}
      <div
        ref={mapRef}
        className={cn('h-full', isLoading ? 'opacity-0' : 'opacity-100')}
      />
    </div>
  );
};

export default DirectionMap;
