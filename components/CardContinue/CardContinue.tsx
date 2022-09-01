import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

type CardContinueProps = {
  title: string;
  description: string;
  stepNumber: string;
};

function CardContinue({ title, description, stepNumber }: CardContinueProps) {
  return (
    <Card
      sx={{
        width: 310,
        minWidth: 310,
        height: 210,
        borderRadius: 5,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
        color: '#ffffff',
        position: 'relative',
      }}
    >
      {/* //top of card */}
      <div
        style={{
          padding: '15px',
          top: 0,
          position: 'absolute',
        }}
      >
        <section>
          <div
            style={{ color: '#121A17', fontSize: '2.4rem', fontWeight: 800 }}
          >
            {title}
          </div>
          <div
            style={{
              color: '#7D8180',
              fontSize: '1.6rem',
              fontWeight: 400,
              lineHeight: '19px',
            }}
          >
            {description}
          </div>
        </section>
      </div>
      {/* //bottom of card */}
      <div
        style={{
          padding: '15px',
          bottom: 0,
          position: 'absolute',
        }}
      >
        <section style={{ display: 'flex', alignItems: 'flex-end' }}>
          <div>
            <Button
              style={{
                color: 'white',
                boxShadow: 'none',
                cursor: 'pointer',
                borderRadius: '15px',
                width: '14rem',
                height: '4.4rem',
                fontSize: '1.6rem',
                textTransform: 'none',
                fontWeight: 600,
              }}
              color="primaryGreen"
              variant="contained"
            >
              Continue
            </Button>
          </div>
          <div style={{ fontSize: '10rem', color: '#c9efde' }}>
            {stepNumber}
          </div>
        </section>
      </div>
    </Card>
  );
}

export default CardContinue;
