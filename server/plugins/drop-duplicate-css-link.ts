/*
 * Nuxt sudah menulis seluruh CSS yang dipakai saat render SSR sebagai <style>
 * inline di <head>, tetapi build klien tetap menambahkan <link rel="stylesheet">
 * ke bundel CSS dengan isi yang sama. Referensi itu request yang memblokir
 * render (Lighthouse: "Render-blocking requests"), jadi kita buang dari HTML
 * awal. Bundel CSS di manifest klien tidak diubah, sehingga navigasi
 * client-side tetap bisa memuat CSS chunk-nya sendiri saat dibutuhkan.
 *
 * Catatan: pada versi Nuxt ini html.head berisi satu string gabungan seluruh
 * tag head, jadi kita harus membuang tag <link>-nya saja lewat substring,
 * bukan menghapus elemen array.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    // Jangan sentuh apa pun kalau ternyata tidak ada style inline sama sekali,
    // supaya halaman tidak kehilangan CSS-nya.
    const head = html.head.join('')
    if (!head.includes('<style')) return

    for (let i = 0; i < html.head.length; i++) {
      html.head[i] = html.head[i].replace(/<link\b[^>]*>/g, (tag) =>
        tag.includes('rel="stylesheet"') && /href="\/_nuxt\/[^"]+\.css"/.test(tag) ? '' : tag,
      )
    }
  })
})
