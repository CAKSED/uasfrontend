import React from 'react'
import {Card, CardGroup, Carousel} from 'react-bootstrap';

function CardTitle() {
  return (
<div>
<p>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="book1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>SATU BUKU BERIBU ILMU</h3>
      <p>Setiap buku yang kamu baca akan ada ilmu yang kamu dapatkan</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="book2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="book3.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</p>
<p>
<CardGroup Card style={{ width: '84rem' }}>
  <Card>
    <Card.Img variant="top" src="https://1.bp.blogspot.com/-LYI3lhkp0zU/Xx98xUh_ndI/AAAAAAAABKI/-iSnOtpvGOIA6LSsnJQi1L9CPR1IN5DeACLcBGAsYHQ/w400-h300/hal1komp.jpg" />
    <Card.Body>
      <Card.Title>NOVEL PULANG || TERE LIYE</Card.Title>
      <Card.Text>
      Pulang, sebuah judul yang menarik dan membuat banyak orang bertanya-tanya. 
      Apakah buku ini menceritakan tentang seseorang yang sedang merantau 
      atau berpetualang jauh, kemudian setelah merasa misinya sudah selesai, ia memilih untuk pulang?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://1.bp.blogspot.com/-JAMgWU5LgNc/YLrQlMKDO1I/AAAAAAAAPTM/MLYVN8agTMItrt-TLEkZR9mg8Nc4bbjtACLcBGAsYHQ/w400-h300/20210203_074221.jpg" />
    <Card.Body>
      <Card.Title>NOVEL BULAN || TERE LIYE</Card.Title>
      <Card.Text>
      novel Bulan ini menceritakan 3 orang sahabat yaitu Raib, Seli 
      dan Ali yang berpetualang di dunia Klan Matahari(tempat Seli berasal). 
      Setibanya mereka di sana, ada sebuah festival Bernama Festival Bunga Matahari.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 5 hours ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://1.bp.blogspot.com/-6Vdap-5kiow/X92VouM1qnI/AAAAAAAAClw/HOG0TNUNQc4bxcFju0-qu_lL3A4GQhdhQCLcBGAsYHQ/w400-h300/1.jpg" />
    <Card.Body>
      <Card.Title> KAMU GAK SENDIRI || SYAHID MUHAMMAD</Card.Title>
      <Card.Text>
      Sebagian besar isi novel ini membahas hal-hal yang berkaitan dengan perasaan cemas, 
      resah, adanya serangan panik, ketakutan yang besar, kondisi mental, 
      perundungan, dan lainnya. Penulis ingin mengekspresikan apa saja yang dahulu 
      menjadi keresahannya dan sulit sekali untuk melawan rasa sakit itu. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 1 days ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://1.bp.blogspot.com/-zG_wjcjytpk/YQvOK-FWHMI/AAAAAAAATgM/AYupj_ue-lYnjUxBOa5xccWWqdM6JKx8QCLcBGAsYHQ/w400-h300/rembulan.jpg" />
    <Card.Body>
      <Card.Title>NOVEL REMBULAN TENGGELAM DI WAJAHMU || TERE LIYE</Card.Title>
      <Card.Text>
      Novel ini bercerita tentang perjalanan hidup seorang 
      pria bernama Rehan Raujana, biasa dipanggil Ray. 
      Seorang Pria pemilik kongsi bisnis terbesar yang pernah ada, berusia 60 tahun. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 2 month ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</p>
</div>
  )
}

export default CardTitle