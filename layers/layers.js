var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2025MetroSystem_1 = new ol.format.GeoJSON();
var features_2025MetroSystem_1 = format_2025MetroSystem_1.readFeatures(json_2025MetroSystem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2025MetroSystem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025MetroSystem_1.addFeatures(features_2025MetroSystem_1);
var lyr_2025MetroSystem_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025MetroSystem_1, 
                style: style_2025MetroSystem_1,
                popuplayertitle: '2025 Metro System',
                interactive: false,
                title: '<img src="styles/legend/2025MetroSystem_1.png" /> 2025 Metro System'
            });
var format_1940BMTSystem_2 = new ol.format.GeoJSON();
var features_1940BMTSystem_2 = format_1940BMTSystem_2.readFeatures(json_1940BMTSystem_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1940BMTSystem_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1940BMTSystem_2.addFeatures(features_1940BMTSystem_2);
var lyr_1940BMTSystem_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1940BMTSystem_2, 
                style: style_1940BMTSystem_2,
                popuplayertitle: '1940 BMT System',
                interactive: true,
                title: '<img src="styles/legend/1940BMTSystem_2.png" /> 1940 BMT System'
            });
var format_1937INDSystem_3 = new ol.format.GeoJSON();
var features_1937INDSystem_3 = format_1937INDSystem_3.readFeatures(json_1937INDSystem_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1937INDSystem_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1937INDSystem_3.addFeatures(features_1937INDSystem_3);
var lyr_1937INDSystem_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1937INDSystem_3, 
                style: style_1937INDSystem_3,
                popuplayertitle: '1937 IND System',
                interactive: true,
                title: '<img src="styles/legend/1937INDSystem_3.png" /> 1937 IND System'
            });
var format_1924IRTsystem_4 = new ol.format.GeoJSON();
var features_1924IRTsystem_4 = format_1924IRTsystem_4.readFeatures(json_1924IRTsystem_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1924IRTsystem_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1924IRTsystem_4.addFeatures(features_1924IRTsystem_4);
var lyr_1924IRTsystem_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1924IRTsystem_4, 
                style: style_1924IRTsystem_4,
                popuplayertitle: '1924 IRT system',
                interactive: false,
    title: '1924 IRT system<br />\
    <img src="styles/legend/1924IRTsystem_4_0.png" /> 1<br />\
    <img src="styles/legend/1924IRTsystem_4_1.png" /> 2<br />\
    <img src="styles/legend/1924IRTsystem_4_2.png" /> <br />' });
var format_1886ElevatedRailSystem_5 = new ol.format.GeoJSON();
var features_1886ElevatedRailSystem_5 = format_1886ElevatedRailSystem_5.readFeatures(json_1886ElevatedRailSystem_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1886ElevatedRailSystem_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1886ElevatedRailSystem_5.addFeatures(features_1886ElevatedRailSystem_5);
var lyr_1886ElevatedRailSystem_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1886ElevatedRailSystem_5, 
                style: style_1886ElevatedRailSystem_5,
                popuplayertitle: '1886 Elevated Rail System',
                interactive: false,
                title: '<img src="styles/legend/1886ElevatedRailSystem_5.png" /> 1886 Elevated Rail System'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_2025MetroSystem_1.setVisible(true);lyr_1940BMTSystem_2.setVisible(true);lyr_1937INDSystem_3.setVisible(true);lyr_1924IRTsystem_4.setVisible(true);lyr_1886ElevatedRailSystem_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_2025MetroSystem_1,lyr_1940BMTSystem_2,lyr_1937INDSystem_3,lyr_1924IRTsystem_4,lyr_1886ElevatedRailSystem_5];
lyr_2025MetroSystem_1.set('fieldAliases', {'route_id': 'route_id', 'route_shor': 'route_shor', 'route_long': 'route_long', 'color': 'color', 'group': 'group', });
lyr_1940BMTSystem_2.set('fieldAliases', {'id': 'id', });
lyr_1937INDSystem_3.set('fieldAliases', {'id': 'id', });
lyr_1924IRTsystem_4.set('fieldAliases', {'id': 'id', });
lyr_1886ElevatedRailSystem_5.set('fieldAliases', {'id': 'id', });
lyr_2025MetroSystem_1.set('fieldImages', {'route_id': 'TextEdit', 'route_shor': 'TextEdit', 'route_long': 'TextEdit', 'color': 'TextEdit', 'group': 'TextEdit', });
lyr_1940BMTSystem_2.set('fieldImages', {'id': '', });
lyr_1937INDSystem_3.set('fieldImages', {'id': '', });
lyr_1924IRTsystem_4.set('fieldImages', {'id': '', });
lyr_1886ElevatedRailSystem_5.set('fieldImages', {'id': '', });
lyr_2025MetroSystem_1.set('fieldLabels', {'route_id': 'no label', 'route_shor': 'no label', 'route_long': 'no label', 'color': 'no label', 'group': 'no label', });
lyr_1940BMTSystem_2.set('fieldLabels', {'id': 'no label', });
lyr_1937INDSystem_3.set('fieldLabels', {'id': 'no label', });
lyr_1924IRTsystem_4.set('fieldLabels', {'id': 'no label', });
lyr_1886ElevatedRailSystem_5.set('fieldLabels', {'id': 'no label', });
lyr_1886ElevatedRailSystem_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});