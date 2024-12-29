export function About() {
  return (
    <section id="about" className="w-full py-8">
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className="text-muted-foreground text-sm just">
            I am a passionate software developer with experience in building web applications using modern technologies. I enjoy learning new things and constantly improving my skills.
          </p>

          <iframe height="175" width="100%" title="Media player" src="https://embed.music.apple.com/id/album/timeless/1770380869?i=1770380890&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1770380890&amp;theme=auto" id="embedPlayer" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style={{border: 0, borderRadius: 12, width: '100%', height: 175, maxWidth: 660, marginTop: 10}}></iframe>
        </section>
  );
}