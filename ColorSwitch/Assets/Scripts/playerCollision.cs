using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class playerCollision : MonoBehaviour {
    public List<Sprite> players;
    public GameObject score;
    public ParticleSystem stars;
    public ParticleSystem plusOne;

    public ParticleSystem goCyan;
    public ParticleSystem goYellow;
    public ParticleSystem goMagenta;
    public ParticleSystem goWhite;

    //private SpriteRenderer playerSpriteRenderer;
    //private Rigidbody2D playerBody;

    private TextMesh text;
    private SpriteRenderer player;
    private string[] names = new string[] { "white", "cyan", "yellow", "magenta", "green" };
    private const int obstNumber = 5;

    private void Start()
    {
        text = score.GetComponent<TextMesh>();
        PlayerPrefs.SetString("currentScore", "0");
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.tag == "Obstacle")
        {
            if (name != "green" && collision.name != name)
            {
                switch (name)
                {
                    case "cyan":
                        goCyan.Play();
                        break;
                    case "yellow":
                        goYellow.Play();
                        break;
                    case "magenta":
                        goMagenta.Play();
                        break;
                    case "white":
                        goWhite.Play();
                        break;
                    default: goWhite.Play();
                        break;
                }

                PlayerPrefs.SetString("currentScore", text.text);
                name = "killed";
                Invoke("KillPlayer", 1);
            }
        }
        else if (collision.tag == "ColorChanger")
        {
            Destroy(collision.gameObject);
            int ran = Random.Range(0, obstNumber);
            if(name == names[ran])
            {
                ran = (ran + 1) % obstNumber;
            }

            changeColor(ran);
        }
        else if (collision.tag == "Point")
        {
            text.text = (int.Parse(text.text) + 1).ToString();

            Destroy(collision.gameObject);

            stars.Play();
            plusOne.Play();
        }
    }

    private void changeColor(int ran)
    {
        player = GetComponent<SpriteRenderer>();
        var sprite = players[ran];
        this.name = names[ran];
        this.player.sprite = sprite;
    }

    private void KillPlayer()
    {
        SceneManager.LoadScene("gameover");
    }
}
