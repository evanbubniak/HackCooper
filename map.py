import plotly.graph_objects as go
import pandas as pd

mapbox_access_token = open(".mapbox_token").read()

data = pd.read_csv("High-School-Data.csv")
lats = data["Latitute"].tolist()
longs = data["Longitude"].tolist()
names = data["School Name"].tolist()

fig = go.Figure(go.Scattermapbox(
        lat = lats,
        lon = longs,
        mode='markers',
        marker=go.scattermapbox.Marker(size=9),
        text = names,
))

fig.update_layout(
    autosize=True,
    hovermode='closest',
    mapbox=go.layout.Mapbox(
        accesstoken=mapbox_access_token,
        bearing=0,
        center=go.layout.mapbox.Center(
            lat=40.73,
            lon=-73.96,
        ),
        pitch=0,
        zoom=10
    ),
)

