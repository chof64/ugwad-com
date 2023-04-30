import Platform from "@/components/Platform";
import Card from "@/components/profile/Card";

export default function index() {
  return (
    <>
      <div className="bg-[url('/ua-man-of-industry.jpg')] bg-cover bg-fixed bg-right">
        <Platform
          className="bg-gradient-to-r from-blue-800/30 to-sky-800/30 backdrop-blur-[2px]"
          type="4xl"
        >
          <div className="flex h-screen max-w-xl items-center">
            <div className="space-y-6">
              {/* <h1 className="text-6xl font-bold text-white">
                Ma-ATHAG nga serbisyo para sa padayon nga pag-UgwAd kang
                unibersidad!
              </h1> */}
              <div className="text-5xl font-bold text-white lg:text-7xl">
                <div className="text-red-500">United</div>
                <div>Goal-oriented</div>
                <div>Well-grounded</div>
                <div>
                  <span className="text-yellow-400">Adaptive</span> &
                </div>
                <div>Dynamic</div>
              </div>
              <div className="space-y-2 text-2xl font-medium text-white lg:text-4xl">
                <p>
                  #padayonsapag<span className="font-bold">UgwAd</span>
                </p>
                <p>#UgwAdparty2023</p>
              </div>
            </div>
          </div>
        </Platform>
      </div>
      <Platform className="py-32" type="4xl">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">Our Platform</h2>
          <div className="space-y-6 text-lg font-medium text-neutral-800">
            <p>
              This section is dedicated for the party&apos; platform and goals
              for the whole term. This is where we also put our plans and
              programs for the students. And any projects that we&apos;re
              planning to do.
            </p>
            <p>
              Ideally this should not be more than two paragraphs long, as this
              will only be a quick overview. A more elaborate version of this
              will be found in the about page or group of pages, if necessary.
            </p>
          </div>
        </div>
      </Platform>
      <Platform className="py-32" type="4xl">
        <div className="space-y-12">
          <h2 className="text-5xl font-bold">The Student Leaders</h2>
          <div>
            <h3 className="text-2xl font-medium">National Officers</h3>
            <div className="grid grid-cols-3 gap-2">
              <Card
                name="Ferdian Vince F. Diana"
                position="President"
                image="/profile/diana-president.jpg"
              />
              <Card
                name="Melchy Leong-on Orquejo"
                position="Vice President"
                image="/profile/orquejo-vice.jpg"
              />
              <Card name="Shee Jane Alvior" position="Senator" />
              <Card name="Alexandrou Estaris Bensa" position="Senator" />
              <Card name="Jirah Jane Cabrillos" position="Senator" />
              <Card name="Janine Sante Chicano" position="Senator" />
              <Card name={`Carlyle "Cing" De La Llave`} position="Senator" />
              <Card name="Queenie Fortunado" position="Senator" />
            </div>
          </div>
        </div>
      </Platform>
    </>
  );
}
