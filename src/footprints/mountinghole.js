module.exports = {
  body: p => `
  
    (footprint "MountingHole:MountingHole_2.2mm_M2" (layer "F.Cu")(tedit 56D1B4CB)
      ${p.at /* parametric position */}
      (descr "Mounting Hole 2.2mm, no annular, M2") 
      (tags "mounting hole 2.2mm no annular m2")(attr exclude_from_pos_files exclude_from_bom)

      (fp_text reference "${p.ref}" (at 0 -3.2) (layer "F.SilkS")  ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "M2" (at 0 3.2) (layer "F.Fab")(effects (font (size 1 1) (thickness 0.15))))
      ${''/* hole */}
      (fp_circle (center 0 0) (end 2.2 0) (layer "Cmts.User") (width 0.15) (fill none) )
      (fp_circle (center 0 0) (end 2.45 0) (layer "F.CrtYd") (width 0.05) (fill none))
      (pad "" np_thru_hole circle (at 0 0) (size 2.2 2.2) (drill 2.2) (layers *.Cu *.Mask))
    )
    `
}