using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerStartColor : MonoBehaviour {
    public List<Sprite> players;
    private SpriteRenderer player;
    private string[] names = new string[] { "white", "cyan", "yellow", "magenta" };

	// Use this for initialization
	void Start () {
        startColorChanger();
    }

    public void startColorChanger()
    {
        player = GetComponent<SpriteRenderer>();
        int ran = Random.Range(0, 4);
        var sprite = players[ran];
        this.name = names[ran];
        this.player.sprite = sprite;
    }
}
