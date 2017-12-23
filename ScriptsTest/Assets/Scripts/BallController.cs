using UnityEngine;
using System.Collections;

public class BallController : MonoBehaviour {

	// Use this for initialization
	public void Start () {
	
	}
	
	// Update is called once per frame
	public void Update () {
        var position = this.transform.position;
        position.x += 0.5f;
        this.transform.position = position;
	}
}
