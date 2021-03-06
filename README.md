# Cloning w3.CSS Template Websites
- Goal:
  - To learn HTML & CSS by getting my hands dirty in code
- [w3.Templates](https://www.w3schools.com/w3css/w3css_templates.asp)

## 1) The Cafe 🍳
- [x] DONE
- [the cafe - Original w3.template](https://www.w3schools.com/w3css/tryw3css_templates_cafe.htm)
- [the cafe - codepen](https://codepen.io/dezzy001/pen/BaKYpqP)

### Learning Outcomes
1. No specific Outcome, Just a general practice HTML & CSS
2. Get used to HTML & CSS syntax

### What did you learn?
- position absolute
    - position absolute will be relative to a parent which has position relative, else will just be relative to the body by default
- max/min width : [reference](https://www.w3schools.com/css/css_max-width.asp)
    - used max-width for .content-section
- CSS attribute:
  - This was required to style the input 'placeholder' attribute
  - The attribute doesn't inherit parent properties
  - Need to use the following syntax to select element attributes
```
selector[attribute]{
    property-name: property;
}
```

### What can you Improve?
- Use Media Queries, to replicate the website responsive elements

## 2) Gourmet Restaurant 🍔
- [x] DONE
- [Gourmet Restaurant - Original w3.template](https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm)
- [Gourmet Restaurant - codepen](https://codepen.io/dezzy001/pen/bGpvWzg?editors=1100)

### Learning Outcomes
1. Applying Media Queries
2. Getting more comfortable with CSS Flexbox Layouts

### What did you learn
- Using max-width to control container width can achieve a nice responsive container
- BEM CSS Methodology
    - [BEM CSS Methodology Docs](http://getbem.com/)
    - [This is a good site with examples of DO's and DON'Ts of BEM](https://seesparkbox.com/foundry/bem_by_example)
- CSS Flexbox equal columns
   - Can set width for equal width columns
   - e.g width: 50% on flexbox child, gives 2 equal width columns
- CSS Media Queries
   - [W3.Reference](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp)
   - Example:
```
@media (max-width:600px) {
  exampleCssSelector{
    /* CSS Property Here */
  }
  body{
    /* CSS Property Here */
  }
}
```

## 3) The Band 🎹
- [ ] IN PROGRESS
- [The Band - Original w3.template](https://www.w3schools.com/w3css/tryw3css_templates_band.htm#)
- [The Band - codepen](https://www.w3schools.com/w3css/tryw3css_templates_band.htm#)

### TODO
- [x] html structure
- [ ] css styles + layout
- [ ] javascript
  - [ ] carousel
  - [ ] modal
- [ ] Navigation "MORE" dropdown bar
- [ ] css media queries (responsiveness)

### Learning Outcomes
1. Applying JavaScript Functions for:
  1. Carousel
  2. Modal
2. Applying Basic Media Queries - Responsive Flexbox layouts
3. Navigation dropdown bar

### What did you learn
