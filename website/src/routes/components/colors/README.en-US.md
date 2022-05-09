Color
===

## Primary Color

The main color is lake blue, which symbolizes the vast ocean, which gives people a youthful, bright and refreshing image. Lake blue is a pure color and symbolizes the sea.
(The meaning of color selection: We are committed to innovation, active and continuous efforts, which is the spiritual pursuit of our team.)

<!--rehype:bgWhite=true&noCode=true&bordered=false-->
```jsx mdx:preview
const colors = [
  { name: 'Light Blue', cn: 'Primary-LightBlue', color: '#5BB5F4', des: 'Typically used for buttons, and any decorative elements', },
  { name: 'Blue', cn: 'Primary-Blue', color: '#2EA3F4', des: 'Typically used for buttons, and any decorative elements', },
  { name: 'Dark Blue', cn: 'Primary-DarkBlue', color: '#008EF0', des: 'Typically used for buttons, and any decorative elements', },
];
const styles = {
  flex: 1, height: 63, maxWidth: 120, color: '#fff', textAlign: 'center',
  display: 'flex', justifyContent: 'center', flexDirection: 'column',
};
const Demo = () => (
  <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {colors.map((item, idx) => {
      return (
        <div key={idx} style={{ background: item.color, ...styles }}>
          <div>{item.name}</div>
          <div>{item.color}</div>
        </div>
      );
    })}
  </div>
);
export default Demo;
```
