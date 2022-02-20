module.exports = {
    nets: {
        from: undefined,
        to: undefined
    },
    params: {
        class: 'B', // for Button
        side: 'F'
    },
    body: p => `
      (footprint "Button_Switch_THT:SW_PUSH_6mm_H5mm" (layer "F.Cu")
        (tags "tact sw push 6mm")
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 3.25 -2) (layer "F.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "${p.ref}" (at 3.25 2.25) (layer "F.Fab")(effects (font (size 1 1) (thickness 0.15))))

        ${'' /* outline */}
        (fp_line (start -0.25 1.5) (end -0.25 3) (layer "F.SilkS") (width 0.12) )
        (fp_line (start 6.75 3) (end 6.75 1.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start 5.5 -1) (end 1 -1) (layer "F.SilkS") (width 0.12) )
        (fp_line (start 1 5.5) (end 5.5 5.5) (layer "F.SilkS") (width 0.12) )
        (fp_line (start 7.75 6) (end 8 6) (layer "F.CrtYd") (width 0.05) )
        (fp_line (start 8 -1.5) (end 8 -1.25) (layer "F.CrtYd") (width 0.05) )
        (fp_line (start -1.5 6) (end -1.25 6) (layer "F.CrtYd") (width 0.05) )
        (fp_line (start 8 6) (end 8 5.75) (layer "F.CrtYd") (width 0.05) )
        (fp_line (start -1.5 -1.25) (end -1.5 -1.5) (layer "F.CrtYd") (width 0.05))
        (fp_line (start -1.25 -1.5) (end 7.75 -1.5) (layer "F.CrtYd") (width 0.05))
        (fp_line (start -1.5 -1.5) (end -1.25 -1.5) (layer "F.CrtYd") (width 0.05))
        (fp_line (start 7.75 6) (end -1.25 6) (layer "F.CrtYd") (width 0.05))
        (fp_line (start 8 -1.25) (end 8 5.75) (layer "F.CrtYd") (width 0.05))
        (fp_line (start 7.75 -1.5) (end 8 -1.5) (layer "F.CrtYd") (width 0.05))
        (fp_line (start -1.5 5.75) (end -1.5 -1.25) (layer "F.CrtYd") (width 0.05))
        (fp_line (start -1.5 5.75) (end -1.5 6) (layer "F.CrtYd") (width 0.05))
        (fp_line (start 6.25 5.25) (end 0.25 5.25) (layer "F.Fab") (width 0.1))
        (fp_line (start 0.25 5.25) (end 0.25 -0.75) (layer "F.Fab") (width 0.1))
        (fp_line (start 6.25 -0.75) (end 6.25 5.25) (layer "F.Fab") (width 0.1))
        (fp_line (start 3.25 -0.75) (end 6.25 -0.75) (layer "F.Fab") (width 0.1))
        (fp_line (start 0.25 -0.75) (end 3.25 -0.75) (layer "F.Fab") (width 0.1))
        (fp_circle (center 3.25 2.25) (end 1.25 2.5) (layer "F.Fab") (width 0.1) (fill none))
        ${'' /* pins */}
        (pad "1" thru_hole circle (at 6.5 0 ${p.rot}) (size 2 2) (drill 1.1) (layers ${p.param.side}.Cu ${p.param.side}.Paste  ${p.param.side}.Mask) ${p.net.from.str})
        (pad "1" thru_hole circle (at 0 0 ${p.rot}) (size 2 2) (drill 1.1) (layers ${p.param.side}.Cu ${p.param.side}.Paste  ${p.param.side}.Mask)  ${p.net.from.str})
        (pad "2" thru_hole circle (at 6.5 4.5 ${p.rot}) (size 2 2) (drill 1.1) (layers ${p.param.side}.Cu ${p.param.side}.Paste  ${p.param.side}.Mask) ${p.net.to.str})
        (pad "2" thru_hole circle (at 0 4.5 ${p.rot}) (size 2 2) (drill 1.1) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.to.str})
      )`
  }
