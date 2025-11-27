import React, { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = () => {
  const features = [
    { icon: '🛰️', title: '全天候监测', description: '对线路桥隧口或高危点位实现全天候实时、准确监测' },
    { icon: '🔀', title: '采用多模态融合技术', description: '基于多模态融合技术，建立端对端智能AI模型，联合学习不同态数据的潜在信息' },
    { icon: '🛡️', title: '强大的环境适应性', description: '设备可克服线路高风压、高湿度、多灰尘、多振动电磁干扰等严峻挑战' },
    { icon: '🎯', title: '丰富的应用场景', description: '铁路线路、桥隧道口、高危点位' },
  ];

  const specifications = [
    { label: '检测距离', value: '>70m' },
    { label: '检测尺寸', value: '20cm×20cm' },
    { label: '检测率', value: '≈100%' },
    { label: '光影条件', value: '全天候适用' },
    { label: '雨天条件', value: '暴雨（降水强度20mm/h）' },
    { label: '雾天条件', value: '浓雾（能见度200m）' },
  ];

  const [showImage, setShowImage] = useState(true);
  const [imageSrc, setImageSrc] = useState('/sentinel-cover.png');

  const handleImageError = () => {
    setShowImage(false);
  };

  return (
    <div className="product-info">
      <div className="hero-section">
        <h2>异物哨兵监测系统</h2>
        <p className="hero-description">
          异物哨兵监测系统是基于创新的雷视一体技术及卷积神经网络异物检测技术，
          为铁路线路桥隧口或高危点位提供多类别、全天候的异物入侵监测解决方案。
          系统针对铁路线路复杂场景，采用先进的三维点云背景建模技术与卷积神经网络检测技术，
          实现对线路异物侵限的精准监测，确保铁路运输的安全与畅通。
        </p>
        {showImage && (
          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src={imageSrc}
                alt="异物哨兵立体图"
                loading="lazy"
                onError={handleImageError}
              />
            </div>
            <p className="image-caption">异物哨兵（示意图）</p>
          </div>
        )}
      </div>

      <div className="features-section">
        <h3>核心特性</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="specifications-section">
        <h3>技术规格</h3>
        <div className="specs-grid">
          {specifications.map((spec, index) => (
            <div key={index} className="spec-item">
              <span className="spec-label">{spec.label}</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
