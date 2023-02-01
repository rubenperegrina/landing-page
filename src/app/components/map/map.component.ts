import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeatureCollection, GeometryObject } from 'geojson';
import { geoJson, Map, tileLayer } from 'leaflet';
import { map, tap } from 'rxjs/operators';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  dataFromMap!: FeatureCollection<GeometryObject>;
  private map: Map;

  constructor(
    private mapService: MapService
  ) { }

  private initMap(): void {
    this.map = new Map('map').setView([41.25, 1.55], 11);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map);
    geoJson(this.dataFromMap, {
      style: (feature) => {
        const fillColor: string = feature?.properties.color;
        return {
          color: "black",
          weight: 2,
          fillColor: fillColor,
          fillOpacity: 0.5,
          opacity: 1,
          dashArray: '3',
        };
      },
      onEachFeature: (feature, layer) => {
        layer.bindPopup("<strong>" + feature.properties.name + "</strong>");
      }
    }).addTo(this.map);
  }

  ngOnInit(): void {
    this.mapService.getMapData().pipe(
      map((res: FeatureCollection<GeometryObject>) => res),
      tap((data) => this.dataFromMap = data)
    ).subscribe(() => {
      this.initMap();
    });
  }
}