'use client';

const CreativitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              創造性は
              <br />
              私たちの行動だけでなく
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-beige">
                —私たちの本質です。
              </span>
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              <strong>私たちはトレンドを追いません—創造します。</strong> ブランド戦略、ストーリーテリング、デザインを融合させ、永続的なインパクトを生み出します。
            </p>
            <p className="text-gray-600 leading-relaxed">
              精巧なデジタル体験の構築、革新的なキャンペーンの立ち上げ、精密かつ情熱を持った実行など、
              私たちはあなたのビジョンを忘れられないものに変えるアイデアを生み出します。
            </p>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="mt-20 py-12 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {[
              'Logoipsum',
              'Logoipsum Foundation',
              'Logoipsum Academy',
              'Logoipsum',
              'Logoipsum',
              'Logoipsum'
            ].map((logo, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="text-gray-700 font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;