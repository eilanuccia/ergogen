module.exports = {
    nets: {
      SDA: 'SDA',
      SCL: 'SCL',
      VCC: 'VCC',
      GND: 'GND'
    },
    params: {
      class: 'OLED',
	    side: 'F'
    },
    body: p => `
        (module lib:OLED_headers (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text value OLED (at 4 4) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
        
        ${''/* component outline */}
        (fp_line (start -0.5 11.5) (end 38.5 11.5) (layer F.SilkS) (width 0.15))
        (fp_line (start 38.5 11.5) (end 38.5 0.5) (layer F.SilkS) (width 0.15))
        (fp_line (start 38.5 0.5) (end -0.5 0.5) (layer F.SilkS) (width 0.15))
        (fp_line (start -0.5 0.5) (end -0.5 11.5) (layer F.SilkS) (width 0.15))

        (fp_line (start -0.5 11.5) (end 38.5 11.5) (layer B.SilkS) (width 0.15))
        (fp_line (start 38.5 11.5) (end 38.5 0.5) (layer B.SilkS) (width 0.15))
        (fp_line (start 38.5 0.5) (end -0.5 0.5) (layer B.SilkS) (width 0.15))
        (fp_line (start -0.5 0.5) (end -0.5 11.5) (layer B.SilkS) (width 0.15))

        ${'' /* pins */}
        (pad 4 thru_hole oval (at 1.6 2.18 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.SDA.str})
        (pad 3 thru_hole oval (at 1.6 4.72 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.SCL.str})
        (pad 2 thru_hole oval (at 1.6 7.26 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.VCC.str})
        (pad 1 thru_hole rect (at 1.6 9.8 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.net.GND.str})
        )
        `
}