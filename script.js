let note=`<div class="note">
<input class="note-heading" >
<textarea class="note-body" ></textarea>

<div class="note-controls">
    <i class="fas fa-italic"></i>
    <i class="fas fa-bold"></i>
    <i class="fas fa-underline"></i>
</div>
</div>
`

$('.add').on('click', function(){
    $('.notes-container').append(note)
    console.log('i mean i did click')
})
