<template>
  <div class="card">
    <div class="head">
      <div class="head-left">
        <div class="container">
          <div class="price">
            <em>RP</em>
            1000.000
          </div>
          <p class="desc">Pinjaman</p>
        </div>
      </div>
      <div class="head-right">
        <div class="date">
          <em>7</em>
          Hari
        </div>
        <p class="desc">Lama Pinjam</p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <div class="interest">{{detail.interestRate}}% hari</div>
        <p class="desc">Referemsi tarif</p>
      </div>
      <div class="footer-mid">
        <div class="price">Rp 1.021.000000000</div>
        <p class="desc">Pembayaran</p>
      </div>
      <div class="footer-right">
        <div class="interest-price">Rp 21.000</div>
        <p class="desc">Bunga + admin</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    detail: {
      type: Object,
      default: () => {}
    }
  },
  created () {
    console.log(this.detail)
  }
}
</script>

<style scoped lang="scss">
.card {
  height: 100%;
  border-radius: 4px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  .head {
    display: flex;
    height: 80px;
    box-sizing: border-box;
    .head-left {
      flex: 1;
      padding: 10px;
      .container {
        position: relative;
        height: 100%;
        .price {
          font-family: 'DINMedium';
          width: 145px;
          padding: 5px 0;
          font-size: 23px;
          color: #e14b36;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center;
          em {
            padding-right: 5px;
            font-style: normal;
          }
        }
        .desc {
          text-align: center;
          font-size: 12px;
          color: #999999;
        }
        &.container::after {
          content: '';
          width: 200%;
          height: 150%;
          position: absolute;
          top: 10%;
          left: 5%;
          border-right: 1px solid #bfbfbf;
          border-radius: 4px;
          -webkit-transform: scale(0.5, 0.5);
          transform: scale(0.5, 0.5);
          -webkit-transform-origin: top left;
        }
      }
    }
    .head-right {
      flex: 1;
      padding: 10px;
      .date {
        font-family: 'DINMedium';
        width: 145px;
        padding: 5px 0;
        font-size: 23px;
        color: #e14b36;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        em {
          padding-right: 5px;
          font-style: normal;
        }
      }
      .desc {
        text-align: center;
        font-size: 12px;
        color: #999999;
      }
    }
  }
  .footer {
    display: flex;
    height: 60px;
    .footer-left {
      position: relative;
      flex: 1;
      padding: 5px 0;
      .interest {
        line-height: 24px;
        font-size: 14px;
        text-align: center;
      }
      &.footer-left::after {
        content: '';
        width: 200%;
        height: 150%;
        position: absolute;
        top: 10%;
        left: 0;
        border-right: 1px solid #bfbfbf;
        border-radius: 4px;
        -webkit-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-transform-origin: top left;
      }
    }
    .footer-mid {
      position: relative;
      flex: 1;
      padding: 5px 0;
      margin: 0 auto;
      .price {
        box-sizing: border-box;
        padding: 0 5px;
        width: 120px;
        line-height: 24px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
      }

      &.footer-mid::after {
        content: '';
        width: 200%;
        height: 150%;
        position: absolute;
        top: 10%;
        left: 0;
        border-right: 1px solid #bfbfbf;
        border-radius: 4px;
        -webkit-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
        -webkit-transform-origin: top left;
      }
    }
    .footer-right {
      flex: 1;
      padding: 5px 0;
      .interest-price {
        box-sizing: border-box;
        padding: 0 5px;
        width: 120px;
        line-height: 24px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
      }
    }
    .desc {
      font-size: 12px;
      text-align: center;
      color: #999999;
    }
  }
}
</style>
